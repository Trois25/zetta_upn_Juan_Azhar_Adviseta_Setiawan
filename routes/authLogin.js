require("dotenv").config()

const checkAuth = (req, res, next) => {
    const auth = req.headers["authorization"]; // header yang harus diketikkan di postman
    
    const userpass = auth.split(" ");//var userpass akan mensplit, jadi inputan di postman akan di bagi menadi array dibedakan dari spasi
  
    const username = userpass[0] //Mengambil value array pertama dari userpass
    const password = userpass[1] //mengambil value array kedua dari userpass

    if (username == process.env.USER && password == process.env.PASSWORD) //process.env mengambil value dari .env
    {
      return next();//melanjutkan ke process selanjutnya
    } else {
      return res.json("Access Denied.");
    }
  };

  module.exports = checkAuth;
  