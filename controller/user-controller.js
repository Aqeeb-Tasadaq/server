import User from "../modal/user-modal.js";

export const SignUp = async (request, response) => {
  console.log(request)
  let userMatch = await User.findOne({ email: request.body.email });
  console.log(request.file)
  if (!userMatch) {
    try {
      const newUser = new User({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        password: request.body.password,
        image: request.file.filename,
      });
      await newUser.save();
      response.status(200).json({ msg: "User Sign Up Successfully! now you can do login" });
    } catch (error) {
        console.log(error)
      response.status(500).json(error);
    }
  } else {
    return response.status(400).json({ msg: "User email already Exist" });
  }
};

export const Login = async (request, response) => {
  let userMatch = await User.findOne({ email: request.body.email });

  if (!userMatch) {
    return response.status(400).json({ msg: "User email not found" });
  }

  try {
    if (request.body.password == userMatch.password) {
      return response.status(200).json({ userData: userMatch });
    } else {
      response.status(400).json({ msg: "Password not matched" });
    }
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getAllUser = async (request, response) => {
  let allUser;
  try {
    allUser = await User.find({});
    response.status(200).json(allUser);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getUserData = async (request, response) => {
  try {
      const post = await User.findById(request.params.id)
      response.status(200).json(post)
  } catch (error) {
      response.status(500).json(error)
  }
}