import { useState } from 'react'
import { 
  SignedIn, 
  SignedOut, 
  SignInButton, 
  SignOutButton, 
  UserButton,
  useUser
 } from "@clerk/clerk-react";

function App() {
  const [count, setCount] = useState(0)
  const { isSignedIn } = useUser();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
      </Routes>

      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
}

export default App;
