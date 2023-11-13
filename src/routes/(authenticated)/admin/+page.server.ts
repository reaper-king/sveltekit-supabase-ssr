import { redirect } from '@sveltejs/kit'

export const load = async ({ locals: { getSession }, depends }) => {
  depends('supabase:auth')
  console.log('rerunning admin page server')
  const session = await getSession()

  if (!session) throw redirect(307, '/auth')

  return { session }
}