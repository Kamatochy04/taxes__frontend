// import { useEffect, useState } from "react";

// import { SecondStep } from "./SecondStep";
// import { FirstStep } from "./FirstStep";

// interface AuthProps {
//   step: number;
// }

// export const AuthForm = ({ step }: AuthProps) => {
//   const [form, setForm] = useState<React.ReactNode>(null);
//   useEffect(() => {
//     if (step === 0) {
//       setForm(<FirstStep />);
//     } else if (step === 1) {
//       setForm(<SecondStep />);
//     } else if (step === 2) {
//       setForm(<></>);
//     }
//   }, [step]);

//   return <>{form}</>;
// };
