import { useVerifyMutation } from "@/Redux/ReduxApi";
import {
  Button,
  Card,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const onInputChange = (val, name) => {
    setFormData({ ...formData, [name]: val });
  };
  const [Login, isLoading] = useVerifyMutation();
  const payload = {
    username: formData.username,
    password: formData.password,
  };
  const handleLogin = async () => {
    try {
      const result = await Login(payload);
      if ("data" in result) {
        await alert("Login successfully");
      } else if ("error" in result) {
        alert("Something went wrong");
      } else {
        console.error("Unknown result format");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        {" "}
        <div className="w-[200px] sm:w-[500px] sm:h-[500px]  h-[200px] opacity-25 bg-teal-600  rounded blur-[10px] sm:blur-[60px] absolute left-0 top-0"></div>
        <div className="w-[200px] sm:w-[600px] sm:h-[600px]  h-[200px] bg-yellow-100 bg-opacity-50 rounded blur-[15px] sm:blur-[60px]  absolute right-0 top-20 "></div>
        <div className="flex justify-center items-center flex-col min-h-screen">
          <img src="/img/quidlogo.svg" className=" h-24 w-24" />
          <div className=" text-3xl font-medium">Welcome</div>

          <div className=" text-xs  font-medium my-3 text-[#95A2A6]">
            Hello there, Log In...
          </div>

          <Card className="overflow-hidden mt-8 rounded-3xl  border  ">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 flex items-center justify-between p-6"
            >
              {" "}
              <form
                className=" mb-2 mx-auto w-80 max-w-screen-lg "
                onSubmit={handleLogin}
              >
                <div className="mb-1 flex flex-col gap-6">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="-mb-5 font-normal"
                  >
                    Log In with Phone Number
                  </Typography>
                  <Input
                    size="small"
                    placeholder="Enter your ID"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-xl"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    name="username"
                    onChange={(e) =>
                      onInputChange(e.target.value, e.target.name)
                    }
                  />
                </div>
                <Link to="/auth/otp">
                  <Button className="mt-6 bg-[#00A897] rounded-full" fullWidth>
                    Send OTP
                  </Button>
                </Link>
              </form>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Signin;