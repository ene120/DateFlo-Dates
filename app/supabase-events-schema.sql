-- ============================================
-- DateFlo Events & Event Attendees Schema
-- Run this in Supabase SQL Editor
-- ============================================

-- Events table
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  event_date DATE,
  city TEXT,
  group_name TEXT,
  invite_code TEXT UNIQUE NOT NULL,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Event attendees (join table)
CREATE TABLE IF NOT EXISTS event_attendees (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  event_id UUID REFERENCES events(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(profile_id, event_id)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_events_invite_code ON events(invite_code);
CREATE INDEX IF NOT EXISTS idx_events_event_date ON events(event_date);
CREATE INDEX IF NOT EXISTS idx_event_attendees_profile ON event_attendees(profile_id);
CREATE INDEX IF NOT EXISTS idx_event_attendees_event ON event_attendees(event_id);

-- ============================================
-- Row Level Security
-- ============================================

ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_attendees ENABLE ROW LEVEL SECURITY;

-- Events: any authenticated user can read (needed to look up by invite code)
CREATE POLICY "Authenticated users can read events"
  ON events FOR SELECT
  TO authenticated
  USING (true);

-- Events: creator can update their own
CREATE POLICY "Creator can update events"
  ON events FOR UPDATE
  TO authenticated
  USING (created_by = auth.uid());

-- Events: creator can delete their own
CREATE POLICY "Creator can delete events"
  ON events FOR DELETE
  TO authenticated
  USING (created_by = auth.uid());

-- Events: authenticated users can create events
CREATE POLICY "Authenticated users can insert events"
  ON events FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Event Attendees: users can read their own attendance records
-- (profiles.id = auth.uid() in this schema)
CREATE POLICY "Users can read own attendance"
  ON event_attendees FOR SELECT
  TO authenticated
  USING (profile_id = auth.uid());

-- Event Attendees: users can join events (insert their own record)
CREATE POLICY "Users can join events"
  ON event_attendees FOR INSERT
  TO authenticated
  WITH CHECK (profile_id = auth.uid());

-- Event Attendees: users can leave events (delete their own record)
CREATE POLICY "Users can leave events"
  ON event_attendees FOR DELETE
  TO authenticated
  USING (profile_id = auth.uid());
