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

export { centerX, centerY, centerXY, menubar, sidebar };
