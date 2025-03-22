import supabase, { supabaseUrl } from "./supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function signup({ fullName, email, password }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function googleLogin() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) {
    throw new Error(error.message);
  }
}

export async function facebookLogin() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "facebook",
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return data?.user;
}

export async function resetPassword(email) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

export async function updateCurrentUser({ password, full_name, avatar }) {
  // 1. update password or fullName
  let updatedData;
  if (password) updatedData = { password };
  if (full_name) updatedData = { data: { full_name } };
  const { data, error } = await supabase.auth.updateUser(updatedData);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2. update user's avatar
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (storageError) throw new Error(storageError.message);
  // 3. update avatar in the current user
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar_url: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });
  if (error2) throw new Error(error2.message);
  return updatedUser;
}
