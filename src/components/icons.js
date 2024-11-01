const centerX = () => (
    <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <rect x='6.79993' y='4' width='3.6' height='16.8' rx='1.8' fill='currentColor' />
        <path
            d='M14 8.19999C14 7.20588 14.8059 6.39999 15.8 6.39999V6.39999C16.7941 6.39999 17.6 7.20588 17.6 8.19999V16.6C17.6 17.5941 16.7941 18.4 15.8 18.4V18.4C14.8059 18.4 14 17.5941 14 16.6V8.19999Z'
            fill='currentColor'
        />
        <rect x='2' y='11.2' width='20.4' height='2.4' rx='1.2' fill='currentColor' />
    </svg>
);

const centerY = () => (
    <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <rect
            x='20.6'
            y='6.99994'
            width='3.6'
            height='16.8'
            rx='1.8'
            transform='rotate(90 20.6 6.99994)'
            fill='currentColor'
        />
        <path
            d='M16.4 14.2C17.3941 14.2 18.2 15.0059 18.2 16V16C18.2 16.9941 17.3941 17.8 16.4 17.8L7.99995 17.8C7.00584 17.8 6.19995 16.9941 6.19995 16V16C6.19995 15.0059 7.00584 14.2 7.99995 14.2L16.4 14.2Z'
            fill='currentColor'
        />
        <rect
            x='13.4'
            y='2.20001'
            width='20.4'
            height='2.4'
            rx='1.2'
            transform='rotate(90 13.4 2.20001)'
            fill='currentColor'
        />
    </svg>
);

const centerXY = () => (
    <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M14.5 20H16C18.2091 20 20 18.2091 20 16V15H22V16C22 19.3137 19.3137 22 16 22H14.5V20ZM4 15V16C4 18.2091 5.79086 20 8 20H9.5V22H8C4.68629 22 2 19.3137 2 16V15H4ZM9.5 4H8C5.79086 4 4 5.79086 4 8V10H2V8C2 4.68629 4.68629 2 8 2H9.5V4ZM14.5 4H16C18.2091 4 20 5.79086 20 8V10H22V8C22 4.68629 19.3137 2 16 2H14.5V4Z'
            fill='currentColor'
        />
        <circle cx='12' cy='12' r='4' fill='currentColor' />
    </svg>
);
const menubar = () => (
    <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <rect
            x='4'
            y='4'
            width='16'
            height='16'
            rx='2'
            stroke='currentColor'
            strokeWidth='2'
            fill='none'
        />
        <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H9C10.6569 21 12 19.6569 12 18V6C12 4.34315 10.6569 3 9 3H6ZM6 8C5.44772 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10H9C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8H6ZM6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11H6ZM5 15C5 14.4477 5.44772 14 6 14H9C9.55228 14 10 14.4477 10 15C10 15.5523 9.55228 16 9 16H6C5.44772 16 5 15.5523 5 15Z'
            fill='currentColor'
        />
    </svg>
);

const fullscreen = () => (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M5.69239 4.1717L6.93971 2.92474C6.96975 2.89456 6.99072 2.85655 7.00023 2.81504C7.00974 2.77353 7.0074 2.73019 6.99349 2.68994C6.97957 2.64969 6.95464 2.61416 6.92153 2.58738C6.88841 2.56059 6.84845 2.54364 6.80617 2.53844L2.25447 2.00159C2.10956 1.98455 1.98455 2.10669 2.00159 2.25439L2.53859 6.8048C2.56132 6.99228 2.79146 7.07181 2.925 6.93831L4.16664 5.69703L7.96541 9.49188C8.05348 9.57993 8.19839 9.57993 8.28647 9.49188L9.49116 8.29036C9.57924 8.20231 9.57924 8.05745 9.49116 7.96939L5.69239 4.1717ZM15.7135 9.49188C15.8016 9.57993 15.9465 9.57993 16.0346 9.49188L19.8334 5.69703L21.075 6.93831C21.1052 6.96834 21.1432 6.9893 21.1847 6.99881C21.2262 7.00831 21.2696 7.00598 21.3099 6.99207C21.3501 6.97816 21.3857 6.95324 21.4125 6.92013C21.4392 6.88703 21.4562 6.84707 21.4614 6.8048L21.9984 2.25723C22.0155 2.11237 21.8933 1.98739 21.7455 2.00443L17.1938 2.54128C17.0063 2.564 16.9268 2.79408 17.0603 2.92758L18.3076 4.17454L14.5088 7.96655C14.4665 8.00926 14.4428 8.06693 14.4428 8.12704C14.4428 8.18714 14.4665 8.24481 14.5088 8.28752L15.7135 9.49188ZM21.4614 17.1952C21.4387 17.0077 21.2085 16.9282 21.075 17.0617L19.8334 18.303L16.0346 14.5081C15.9919 14.4658 15.9342 14.4421 15.8741 14.4421C15.8139 14.4421 15.7563 14.4658 15.7135 14.5081L14.5088 15.7096C14.4665 15.7523 14.4428 15.81 14.4428 15.8701C14.4428 15.9302 14.4665 15.9879 14.5088 16.0306L18.3076 19.8283L17.0603 21.0753C17.0302 21.1054 17.0093 21.1435 16.9998 21.185C16.9903 21.2265 16.9926 21.2698 17.0065 21.3101C17.0204 21.3503 17.0454 21.3858 17.0785 21.4126C17.1116 21.4394 17.1516 21.4564 17.1938 21.4616L21.7455 21.9984C21.8904 22.0154 22.0155 21.8933 21.9984 21.7456L21.4614 17.1952ZM8.28647 14.5081C8.24375 14.4658 8.18606 14.4421 8.12594 14.4421C8.06582 14.4421 8.00813 14.4658 7.96541 14.5081L4.16664 18.303L2.925 17.0617C2.89481 17.0317 2.85679 17.0107 2.81527 17.0012C2.77375 16.9917 2.7304 16.994 2.69014 17.0079C2.64988 17.0218 2.61433 17.0468 2.58754 17.0799C2.56075 17.113 2.54379 17.1529 2.53859 17.1952L2.00159 21.7428C1.98455 21.8876 2.10672 22.0126 2.25447 21.9956L6.80617 21.4587C6.99369 21.436 7.07325 21.2059 6.93971 21.0724L5.69239 19.8283L9.49116 16.0334C9.57924 15.9454 9.57924 15.8005 9.49116 15.7125L8.28647 14.5081Z'
            fill='currentColor'
        />
    </svg>
);
const sidebar = () => (
    <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <rect
            x='4'
            y='4'
            width='16'
            height='16'
            rx='2'
            stroke='currentColor'
            strokeWidth='2'
            fill='none'
        />
        <rect x='3' y='3' width='12' height='18' rx='3' fill='currentColor' />
    </svg>
);

export { centerX, centerY, centerXY, menubar, sidebar, fullscreen };
