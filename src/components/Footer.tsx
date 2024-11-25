export default function Footer() {
  return (
    <footer className='mt-10 w-full pb-8'>
      <div className='mx-auto max-w-7xl text-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Jean Marc Larhantec. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
}
