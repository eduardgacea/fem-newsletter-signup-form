import { useState } from "react";

import Confirmation from "./components/confirmation/Confirmation";
import Signup from "./components/signup/Signup";

function App() {
    const [showSignup, setShowSignup] = useState(true);
    const [email, setEmail] = useState("");

    return (
        <>
            {showSignup ? (
                <Signup setShowSignup={setShowSignup} email={email} setEmail={setEmail} />
            ) : (
                <Confirmation email={email} />
            )}
        </>
    );
}

export default App;
