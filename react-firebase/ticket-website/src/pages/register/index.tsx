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
import { UserRegister } from "@/types";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";


const initialValue: UserRegister = {
  email: "",
  password: "",
  confirmPassword: "",
};

interface IRegisterProps {}

const Register: React.FunctionComponent<IRegisterProps> = () => {
  const { googleSignIn, signUp } = useUserAuth();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = React.useState<UserRegister>(initialValue);

  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // this handles the <form> when submitting
  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log("The user if is: ", userInfo);
      await signUp(userInfo.email, userInfo.password);
      navigate("/");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="bg-slate-800 w-full h-screen">
      <div className="flex items-center justify-center w-full h-full p-6">
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
          <Card>
              <form onSubmit={handleSubmit}>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center mb-4">
                    Create an account
                  </CardTitle>
                  <CardDescription>
                    Enter your details below to create your account
                  </CardDescription>
                </CardHeader>

                <CardContent className="grid gap-4">
                  <div className="grid">
                    <Button variant="outline" onClick={handleGoogleSignIn}>
                      <Icons.google className="mr-2 h-4 w-4" />
                      Google
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

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      value={userInfo.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserInfo({ ...userInfo, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={userInfo.password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserInfo({ ...userInfo, password: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="password">Confirm Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={userInfo.confirmPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserInfo({
                          ...userInfo,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col">
                  <Button className="w-full" type="submit">
                    Create account
                  </Button>

                  <p className="mt-3 text-sm text-center">
                    Already have an account?{" "}
                    <Link to="/login">Log In Account</Link>
                  </p>
                </CardFooter>
              </form>
            </Card>
          </div>
      </div>
    </div>
  );
};

export default Register;
