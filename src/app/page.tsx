import { supabase } from '../supabase';

export default function Home() {
  const fetchStrains = async () => {
    try {
      const { data, error } = await supabase.from('strains').select('*');
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchStrains();

  return (
    <main>
      <h1 className='text-4xl font-bold text-center text-green-600'>
        Welcome to Leafly Clone
      </h1>
    </main>
  );
}
