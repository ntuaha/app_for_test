// var app = require('app'); // 控制應用程式生命週期的模組。
// var BrowserWindow = require('browser-window'); // 創造原生瀏覽器窗口的模組
const {
    app,
    BrowserWindow,
    Notification
} = require('electron')

// 保持一個對於 window 物件的全域的引用，不然，當 JavaScript 被GC，
// window 會被自動地關閉
var mainWindow = null;




function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })
    // 載入應用程式的 index.html
    mainWindow.loadFile('index.html')

    // 打開開發者工具
    //mainWindow.webContents.openDevTools();

    // 當window 被關閉，這個事件會被觸發
    mainWindow.on('closed', function () {
        // 取消引用 window 物件，如果你的應用程式支援多視窗的話，
        // 通常會把多個 window 物件存放在一個數組裡面，
        // 但這次不是。
        mainWindow = null;
    });
}

const NOTIFICATION_TITLE = 'Basic Notification'
const NOTIFICATION_BODY = 'Notification from the Main process'

function showNotification() {
    let myNotification = new Notification({
        title: NOTIFICATION_TITLE,
        body: NOTIFICATION_BODY
    }).show()
/*
    myNotification.onclick = () => {
        console.log('Notification clicked')
    }
    */
}

app.whenReady().then(createWindow).then(showNotification)

// 當所有窗口被關閉了，退出。
app.on('window-all-closed', function () {
    // 在macOS 上，通常使用者在明確地按下 Cmd + Q 之前
    // 應用會保持活動狀態
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    /*
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
        */
})