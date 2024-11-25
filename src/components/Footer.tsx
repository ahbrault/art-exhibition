export default function Footer() {
  return (
    <footer className='mt-10 w-full py-6'>
      <div className='mx-auto max-w-7xl text-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Jean Marc Larhantec. Tout droits
          réservés reserved.
        </p>
      </div>
    </footer>
  );
}
