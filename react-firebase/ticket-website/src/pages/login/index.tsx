import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUserAuth } from "@/context/userAuthContext";
import { auth, db } from "@/firebaseConfig";
import { UserLogIn } from "@/types";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const initialValue: UserLogIn = {
  email: "",
  password: "",
};

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = () => {
  const { googleSignIn, logIn } = useUserAuth();
  const navigate = useNavigate();
  const [userLogInInfo, setUserLogInInfo] =
    React.useState<UserLogIn>(initialValue);

  // this handles the google sign in feature
  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    try {
      await googleSignIn();
      const user = auth.currentUser;

      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          username: user.email,
          email: user.email,
        });
      }

      navigate("/");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // this handles the <form> when submitting
  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log("The user if is: ", userLogInInfo);
      await logIn(userLogInInfo.email, userLogInInfo.password);

      navigate("/");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="bg-slate-800 w-full h-screen flex flex-col justify-center items-center">
      <div className="max-w-sm rounded-xl border bg-card text-card-foreground shadow-sm">
        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center mb-4">
                Ticket Reservation
              </CardTitle>
              <CardDescription className="text-center">
                Enter your details below to{" "}
                <span className="font-bold">Log in your account</span>
              </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={userLogInInfo.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUserLogInInfo({
                      ...userLogInInfo,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={userLogInInfo.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUserLogInInfo({
                      ...userLogInInfo,
                      password: e.target.value,
                    })
                  }
                />
              </div>

              <div className="grid">
                <Button className="w-full" type="submit">
                  Log In
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col">
              <Button
                variant="outline"
                className="w-full"
                onClick={handleGoogleSignIn}
              >
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Button>

              <p className="mt-3 text-sm text-center">
                Don't have an account?{" "}
                <Link to="/register">Create Account</Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
