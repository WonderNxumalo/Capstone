

function Footer () {
    return (
        <div className="container bg-gradient-to-br from-blue-900 to-blue-300 text-lg p-2">
            <p className="text-white text-lg xl:text-xl mb-1"> &copy; Wonder Nxumalo_ALX  2024</p>
            <div className="text-white ">
                <ul className="flex flex-row align-center justify-evenly">
                    <a className="hover:text-blue-300" href="https://github.com/WonderNxumalo" target="_blank">
                        <img src="https://img.icons8.com/?size=30&id=62856&format=png&color=ffffff" alt="GitHub_logo" />
                    </a>
                    <a className="hover:text-blue-300" href="https://x.com/Mthonti_" target="_blank">
                        <img src="https://img.icons8.com/?size=30&id=phOKFKYpe00C&format=png&color=ffffff" alt="Twitter/X_logo" />
                    </a>
                    <a className="hover:text-blue-300" href="https://www.linkedin.com/in/wonder-nxumalo-415b6289/" target="_blank">
                        <img src="https://img.icons8.com/?size=30&id=8808&format=png&color=ffffff" alt="LinkedIn_logo" />
                    </a>
                </ul>
            </div>
        </div>
        
    );
}

export default Footer;