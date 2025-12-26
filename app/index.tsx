import { Redirect } from "expo-router";

const index = () => {
  
  // return <Redirect href={'/home'}/>
  // return <Redirect href='/home'/>
  return <Redirect href='/tabs'/>
  
  // return (
  //   <SafeAreaView>
  //     <View className=" mt-10 mx-5">
  //       <Text 
  //         className=" text-3xl"
  //         style={{fontFamily:'WorkSans-Black'}}
  //         >H/mundo/portillo</Text>
  //       <Text className=" text-4xl font-work-black text-primary">H/mundo/portillo</Text>
  //       <Text className=" text-3xl font-work-medium text-secundary">H/mundo/portillo</Text>
  //       <Text className=" text-3xl font-work-light">H/mundo/portillo</Text>
  //       <Link href="/products">
  //         Productos
  //       </Link>
  //     </View>
  //   </SafeAreaView>
  // );
};

export default index;
