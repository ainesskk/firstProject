import "../styles/Navbar.module.css";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between border-b-2 w-full">
            <div className="mr-4">
                <img src="src/assets/Logo.png" alt="logo" />
            </div>
            <div className="flex space-x-4">
                <p className="text-lavender">Main</p>
                <p className="text-greyDark">About</p>
                <p className="text-greyDark">Get in touch</p>
            </div>
        </div>
    );
}
