import React from 'react'
import classes from "./Account.module.css"
const Account = () => {
  return (
    <div className={classes.Account}>
      <div className={classes.account_container}>
        <div className={classes.left}>
          <div className={classes.userName}>
            <div className={classes.item}>
              <svg width="133" height="131" viewBox="0 0 133 131" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M103.297 37.2512C103.297 57.8244 86.2637 74.5024 65.2527 74.5024C44.2416 74.5024 27.2088 57.8244 27.2088 37.2512C27.2088 16.6779 44.2416 0 65.2527 0C86.2637 0 103.297 16.6779 103.297 37.2512ZM37.8796 37.2512C37.8796 52.0539 50.135 64.0539 65.2527 64.0539C80.3704 64.0539 92.6257 52.0539 92.6257 37.2512C92.6257 22.4485 80.3704 10.4485 65.2527 10.4485C50.135 10.4485 37.8796 22.4485 37.8796 37.2512Z"
                  fill="#B5B5B5" />
                <path
                  d="M127.419 131C130.63 131 133.259 128.404 132.98 125.22C132.388 118.477 130.764 111.852 128.153 105.578C124.799 97.518 119.884 90.1947 113.687 84.026C107.49 77.8573 100.134 72.964 92.0375 69.6255C83.9411 66.287 75.2635 64.5687 66.5 64.5687C57.7365 64.5687 49.0589 66.287 40.9625 69.6255C32.8661 72.964 25.5096 77.8573 19.3129 84.026C13.1162 90.1947 8.20069 97.518 4.84706 105.578C2.23635 111.852 0.611955 118.477 0.0203866 125.22C-0.258942 128.404 2.37002 131 5.58059 131C8.79115 131 11.3621 128.402 11.7002 125.224C12.2556 120.002 13.5623 114.877 15.5885 110.007C18.3579 103.351 22.417 97.304 27.534 92.21C32.6511 87.1161 38.726 83.0753 45.4118 80.3185C52.0976 77.5616 59.2634 76.1427 66.5 76.1427C73.7366 76.1427 80.9024 77.5616 87.5882 80.3185C94.274 83.0753 100.349 87.1161 105.466 92.21C110.583 97.304 114.642 103.351 117.411 110.007C119.438 114.877 120.744 120.002 121.3 125.224C121.638 128.402 124.209 131 127.419 131Z"
                  fill="#B5B5B5" />
              </svg>
            </div>
            <a href="@username" className={classes.username}>@username</a>
          </div>
          <div className={classes.fileNumber}>
            <p>Файлов загружено: <span>0</span></p>
            <p className={classes.asd}>Общий размер загруженных: 1111</p>
          </div>
          <div className={classes.upload_account}>
            <div className={classes.upload}>
              <svg className={classes.svg_bg_up} width="309" height="272" viewBox="0 0 309 272" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="3.5" y="3.5" width="302" height="265" rx="6.5" stroke="#AEAEAE" strokeWidth="7"
                  strokeLinecap="square" strokeDasharray="21 21" />
              </svg>
              <div className={classes.item_up}>
                <svg width="190" height="127" viewBox="0 0 190 127" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M153.227 47.9108C147.836 20.5978 123.825 0 95 0C72.105 0 52.2738 13.0096 42.37 32.0358C18.5488 34.6075 0 54.8164 0 79.375C0 105.68 21.2642 127 47.5 127H150.417C172.275 127 190 109.228 190 87.3125C190 66.3575 173.755 49.3792 153.227 47.9108ZM95 111.125L60.6971 76.7318C58.7496 74.7792 60.1271 71.4375 62.8821 71.4375H79.1667V43.6562C79.1667 41.4655 80.94 39.6875 83.125 39.6875H106.875C109.06 39.6875 110.833 41.4655 110.833 43.6562V71.4375H127.118C129.873 71.4375 131.25 74.7792 129.303 76.7318L95 111.125Z"
                    fill="#D7D7D7" />
                </svg>
                <p>Перетащите фото чтобы его загрузить</p>
              </div>

              <form action="/upload" method="post">
                <input type="file" name="file" id="file" />
              </form>
            </div>
          </div>
        </div>
        <div className={classes.Right_Right}></div>
      </div>
    </div>
  )
}

export default Account