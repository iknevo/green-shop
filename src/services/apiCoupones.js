import toast from "react-hot-toast";
import supabase from "./supabase";

export async function getCoupon(coupon) {
  const { data, error, isLoading } = await supabase
    .from("coupones")
    .select("coupon,value")
    .eq("coupon", coupon)
    .single();

  if (error) {
    console.error(error);
    toast.error("Invalid Coupon!");
    throw new Error(
      "There was an error while getting this coupon, Please try again later!",
    );
  }
  return { data, isLoading };
}
