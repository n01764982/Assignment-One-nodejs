import Link from "next/link";

export default function Navbar(){

    return(
    <>
    <div>
            <nav id='navbar'>
                <ul>
                   <li><Link href="/homepage">HOME</Link></li>
                   <li><Link href="/note">NOTEPAD</Link></li>
                   <li><Link href="/dice">DICE ROLLER</Link></li>
                </ul>
            </nav>
        </div>
    </>
    );

}

