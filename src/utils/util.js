//加密
const crypto = require('crypto');
export const aesEncrypt = (data) => {
    const cipher = crypto.createCipher('aes192', 'Password!');
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
};
//解密
export const aesDecrypt = (encrypted) => {
    const decipher = crypto.createDecipher('aes192', 'Password!');
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};


//上传应用开启关闭log
const path = require('path');

const gui = require('nw.gui');
const DeBug = process.env.NODE_ENV === 'development';
export const openLoginWin = () => {
  gui.Screen.Init();
  const s = gui.Screen.screens;
  const sysWidth = s[0].bounds.width;
  let width,height;
  console.log('sysWidth',sysWidth);
  //0.7
  width =  350;
  height = 420;
  if(sysWidth >= 1280 && sysWidth <= 1366){
    //0.75
    width =  375;
    height = 450;
  }
  if(sysWidth >= 1366 && sysWidth <= 1440){
    //0.8
    width =  400;
    height = 480;
  }
  if(sysWidth >= 1440 && sysWidth < 1600){
    //0.85
    width =  425;
    height = 510;
  }
  if(sysWidth >= 1600 && sysWidth < 1920){
    //0.9
    width =  450;
    height = 540;
  }
  if(sysWidth >= 1920){
    width = 500;
    height = 600;
  }
  global.loginWidth =  width;
  const mainWin = gui.Window.get();
  const loginUrl = DeBug?"http://localhost:8080/loginWin.html":'../../loginWin.html';
  gui.Window.open(loginUrl, {
    position: 'center',
    new_instance: false,
    show:false,
    width: width,
    height: height,
    min_width:width,
    min_height:height,
    focus: true,
    resizable:false,
    frame:false,
    icon: "/static/images/icon.png",
  },function(loginWin){
    loginWin.on('loaded',function(){
      loginWin.show(true);
    });
    mainWin.close(true);
  });
};

export const openMainWin = () => {
  gui.Screen.Init();
  const s = gui.Screen.screens;
  const sysWidth = s[0].bounds.width;
  let width,height;
  console.log('systemWidth',sysWidth);
  //0.70
  width =  910;
  height = 560;
  if(sysWidth >= 1280 && sysWidth <= 1366){
    //0.75
    width =  975;
    height = 600;
  }
  if(sysWidth >= 1366 && sysWidth <= 1440){
    //0.8
    width =  1040;
    height = 640;
  }
  if(sysWidth >= 1440 && sysWidth < 1600){
    //0.85
    width =  1150;
    height = 680;
  }
  if(sysWidth >= 1600 && sysWidth < 1920){
    //0.9
    width =  1170;
    height = 720;
  }
  if(sysWidth >= 1920){
    width = 1300;
    height = 800;
  }
  global.mainWidth =  width;
  console.log('窗口宽度',width)
  const loginWin = gui.Window.get();
  const mainUrl = DeBug?"http://localhost:8080/mainWin.html":'../../mainWin.html';
  gui.Window.open(mainUrl, {
    position: 'center',
    new_instance: false,
    show:false,
    width: width,
    height: height,
    min_width:width,
    min_height:height,
    focus: true,
    frame:false,
    icon: "/static/images/icon.png",
  },function(mWin){
    mWin.on('loaded',function(){
      mWin.show(true);
    });
    loginWin.close(true);
  });
};

export const mergePath = (pathString) => {
  const nwPath = process.execPath;
  const nwDir = path.dirname(nwPath);
  if(DeBug){
    return path.resolve(pathString);
  }else{
    return path.join(nwDir,pathString);
  }
};

