// import WelcomeComponent from "../../components/welcome-component";
// import { useRouter } from "expo-router";

// export default function welcome() {
//   const router = useRouter();
//   const { role } = router.query;
//   const navigateToAuth = (authType: "login" | "signup") => {
//     router.push(`/(auth)/${authType}?role=${role}`);
//   };
//   return (
//     <>
//       <WelcomeComponent
//         onSkip={() => router.push("/seller/home-screen")}
//         onEmailPress={() => router.push("/(auth)/signup")}
//         onSignInPress={() => router.push("/(auth)/login")}
//       />
//     </>
//   );
// }
// import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
// import { useRouter, useSearchParams } from "expo-router";

// export default function WelcomeComponent() {
//   const handleSkip = () => {
//     // Handle skip action
//     console.log("Skip pressed");
//   };

//   const handleEmailPress = () => {
//     // Handle email press action
//     console.log("Email pressed");
//   };

//   const handleSignInPress = () => {
//     // Handle sign in press action
//     console.log("Sign In pressed");
//   };

//   const router = useRouter();
//   const { role } = useSearchParams(); // Use this hook to get query parameters

//   if (!role) {
//     // Handle missing role case
//     console.error("Role parameter is missing.");
//     return null; // Or return a fallback UI
//   }

//   const navigateToAuth = (authType: "login" | "signup") => {
//     router.push(`/(auth)/${authType}?role=${role}`);
//   };

//   return (
//     <ImageBackground
//       source={require("@/assets/images/bg-welcome.png")}
//       className="flex-1 px-6"
//     >
//       {/* skip btn */}
//       <View className="absolute top-10 right-4">
//         <TouchableOpacity
//           onPress={handleSkip}
//           className="bg-white px-4 py-2 rounded-full"
//         >
//           <Text className="text-green-600 font-bold">Skip</Text>
//         </TouchableOpacity>
//       </View>

//       <View className="flex flex-1 justify-around">
//         <View className="">
//           <Text className="text-white text-5xl font-bold">Welcome to</Text>
//           <Text className="text-yellow-400 text-3xl font-bold">
//             Roaming Acres Market
//           </Text>
//         </View>

//         {/* email and phone btn */}
//         <View className="">
//           <Text className="text-white text-xl font-normal">
//             Make easy farming with fast delivery at your door.
//           </Text>
//           {/* email btn */}
//           <TouchableOpacity
//             className="border border-white bg-[#fefefe4b] py-3 mt-[20%] rounded-[3px] items-center"
//             onPress={() => navigateToAuth("signup")}
//           >
//             <Text className="text-white text-lg">Start with Email</Text>
//           </TouchableOpacity>

//           <View className="flex-row justify-center mt-[10%] ">
//             <Text className="text-white text-lg">Already have an Account?</Text>
//             <TouchableOpacity onPress={() => navigateToAuth("login")}>
//               <Text className="text-white text-lg underline font-bold ml-1">
//                 Sign In
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </ImageBackground>
//   );
// }
// import { Text } from "react-native";
// import WelcomeComponent from "../../components/welcome-component";
// import { useRouter } from "expo-router";

// export default function Welcome() {
//   const router = useRouter();
//   const { role } = router.query;

//   if (!role) {
//     return (
//       <Text style={{ color: "red", textAlign: "center" }}>
//         Role is missing, please try again.
//       </Text>
//     );
//   }

//   const navigateToAuth = (authType: "login" | "signup") => {
//     router.push(`/(auth)/${authType}?role=${role}`);
//   };

//   return (
//     <>
//       <WelcomeComponent
//         onSkip={() => router.push(`/seller/home-screen`)} // You can make this conditional based on `role`
//         onEmailPress={() => router.push(`/(auth)/signup?role=${role}`)}
//         onSignInPress={() => router.push(`/(auth)/login?role=${role}`)}
//       />
//     </>
//   );
// }

import { Text } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import WelcomeComponent from "@/components/welcome-component";

export default function Welcome() {
  const router = useRouter();
  const { role } = useLocalSearchParams<{ role?: string }>();

  if (!role) {
    return (
      <Text style={{ color: "red", textAlign: "center", marginTop: 20 }}>
        Role missing! Please go back and select your account.
      </Text>
    );
  }

  const navigateToAuth = (
    authType: "login" | "signup" | "verification-code"
  ) => {
    router.push(`/(auth)/${authType}?role=${role}`);
  };

  const handleSkip = () => {
    if (role === "seller") {
      router.push(`/(seller)/(home)/home`);
    } else {
      router.push(`/(buyer)/home`);
    }
  };

  return (
    <WelcomeComponent
      onSkip={handleSkip}
      onEmailPress={() => navigateToAuth("signup")}
      onSignInPress={() => navigateToAuth("login")}
    />
  );
}
