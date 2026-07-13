export const bankingGallery = [
  {
    title: "Login",

    image: "/images/banking/gallery/login.png",

    description:
      "Secure authentication using JWT access tokens.",

    endpoint: "POST /auth/login",

    security: [
      "Password hashing",
      "JWT Authentication",
    ],

    database: [
      "Users",
    ],

    technologies: [
      "React",
      "Next.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
  },

  {
    title: "Registration",

    image: "/images/banking/gallery/register.png",

    description:
      "Creates a new customer account with validation.",

    endpoint: "POST /auth/register",

    security: [
      "Email validation",
      "Password hashing",
    ],

    database: [
      "Users",
    ],

    technologies: [
      "React",
      "Express",
      "MongoDB",
      "bcrypt",
    ],
  },

  {
    title: "Dashboard",

    image: "/images/banking/gallery/dashboard.png",

    description:
      "Displays balances, recent transactions and quick banking actions.",

    endpoint: "GET /users/profile",

    security: [
      "JWT Protected",
    ],

    database: [
      "Users",
      "Transactions",
    ],

    technologies: [
      "Next.js",
      "TailwindCSS",
      "MongoDB",
    ],
  },

  {
    title: "Transfer Money",

    image: "/images/banking/gallery/transfer_money.png",

    description:
      "Initiates a secure transfer requiring authorization code approval.",

    endpoint: "POST /transactions/transfer",

    security: [
      "JWT Protected",
      "Authorization Code",
    ],

    database: [
      "Transactions",
    ],

    technologies: [
      "Express",
      "MongoDB",
      "JWT",
    ],
  },

  {
    title: "Transaction History",

    image: "/images/banking/gallery/Transaction_history.png",

    description:
      "Displays all transfers belonging to the authenticated user.",

    endpoint: "GET /transactions/my-transactions",

    security: [
      "JWT Protected",
    ],

    database: [
      "Transactions",
    ],

    technologies: [
      "MongoDB",
      "Express",
    ],
  },

  {
    title: "User Profile",

    image: "/images/banking/gallery/user_profile.png",

    description:
      "Update profile, upload profile image and manage account settings.",

    endpoint: "PATCH /users/update-profile",

    security: [
      "JWT Protected",
    ],

    database: [
      "Users",
    ],

    technologies: [
      "Cloudinary",
      "Multer",
      "Express",
    ],
  },

  {
    title: "Admin User Management",

    image: "/images/banking/gallery/admin_user_management.png",

    description:
      "Administrative interface for managing customer accounts.",

    endpoint: "Admin APIs",

    security: [
      "Admin Role",
      "JWT Protected",
    ],

    database: [
      "Users",
    ],

    technologies: [
      "MongoDB",
      "Express",
    ],
  },
];