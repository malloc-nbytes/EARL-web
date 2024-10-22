function Footer() {
    return (
        <div className='text-gray-300 sm:text-base relative y-500 items-center justify-center flex mt-auto'>
            &copy; {new Date().getFullYear()} {" malloc-nbytes"}
        </div>
    );
}

export default Footer;
