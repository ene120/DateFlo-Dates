-- ============================================================
-- Fix: Allow couple members to see each other's profiles
-- Run this in your Supabase SQL Editor
-- ============================================================

-- Problem: The profiles RLS policy only lets users see their OWN profile.
-- When Partner 2 joins via invite, they can't see Partner 1's name/email
-- because getCoupleMembers() is blocked by RLS. This makes partner info blank.

-- Fix 1: Couple members can view each other's profiles
create policy "Couple members can view each other"
  on public.profiles for select
  using (
    couple_id is not null
    and couple_id in (
      select p.couple_id from public.profiles p where p.id = auth.uid()
    )
  );

-- Fix 2: Couple members can view each other's plan requests
create policy "Couple members can view plan requests"
  on public.plan_requests for select
  using (
    couple_id in (
      select p.couple_id from public.profiles p where p.id = auth.uid()
    )
  );

-- Fix 3: Couple members can view each other's favorites
create policy "Couple members can view favorites"
  on public.favorites for select
  using (
    couple_id in (
      select p.couple_id from public.profiles p where p.id = auth.uid()
    )
  );
