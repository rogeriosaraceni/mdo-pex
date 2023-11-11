import Nav from "@/components/Nav";
import FancyboxConfig from "@/util/FancyboxConfig";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <Nav />
            <h1>Login</h1>

            <FancyboxConfig>
                <Link
                    data-fancybox
                    data-type="iframe"
                    data-width="1200"
                    data-height="600"
                    to="/popupLogin"
                >
                    Open
                </Link>
            </FancyboxConfig>
        </>
    );
}
