# TS React Template Documentation

## 📄 How to Add New Pages

### Step 1: Create the Page

- Create a new folder inside `/pages`, and place the page component within it. If the new page has specific components, assets, and/or services (not shared with other pages), they should be located inside the page directory.

E.g., `/pages/contact/components/ContactForm.tsx`.

- Update the barrel in `/pages/index.ts` by adding the new page. This approach makes imports more readable.

E.g., `import { Page1, Page2, Page3 } from '@/pages'` (use absolute imports whenever possible).

### Step 2: Update Routing

- Update the `PagesPaths` enum (located in the `/config/constants` folder) with the new path.
- Update the `/router/pages Data.tsx` file by adding the new path and the component corresponding to the new page. Private routes should be added to the `privatePages` array and public ones to `publicPages`.

## 🧩 How to Add New Components

### Step 1: Create the Component

- For specific components of a page that won't be shared with others, place them in `/pages/PageName/components`. Components that can be shared across different parts of the UI should be located in `/components`.

E.g., `/components/InputLabel/InputLabel.tsx`.

- Update the barrel in `/components/index.ts` by adding the new component.

### Step 2: Styling

- We use Tailwind for the styles, if you use conditional classes or classes that are received by props, use the twMerge function

E.g., `twMerge('text-white bg-black', disabled && 'opacity-50')`

- All colors must be Tailwind variables, if you need to add one, do it in `tailwind.config.js` file. (DO NOT HARDCODE COLORS).

## 🌐 How to Add New Contexts

### Step 1: Creating Context

- Add a new file in `/store` with the name of the context.  
  E.g., `NewProvider.tsx`.
- Update the barrel inside `/hooks`.
- Add a hook to consume the new context in `/hooks`.
- Finally, add the Provider in `/providers/AppProvider.tsx`.

### Step 2: Consuming Context

To consume the context, always use the hook you created.

E.g., `const { theme } = useThemeContext()`.

## 🛠️ How to Create Utility Functions

Every time you make a function that you think will be used again elsewhere in the app , we encourage you to declare it and export it from `/utils` , so that it can later be reused.

- Create the file in `/utils` .
- Update the barrel index.ts to export your new function, then you can use it by importing it like `import { moduleName } from '@/utils';`

⚠️ Disclaimer: We recommend creating modules with several functions in the same file, e.g., module: `formValidations.ts` with `validateEmail`, `validateName`, `validatePhone` functions.

##### How to add the module to the barrel?

- E.g., `export * as formValidations from './formValidations'`
- Each function in `formValidations.ts` should be declared as `export const functionName`
- You can then import the functions this way
  `import { validateEmail } from '@/utils/formValidations'`

## 🔄 Data Fetching

We consistently utilize [React Query](https://tanstack.com/query/latest/docs/react/quick-start) for handling data fetching, updating, and synchronizing.

- Use `useQuery` for asynchronous data fetching. (GET)
- Use `useMutation` for creating, updating, or deleting data. (POST/PUT/PATCH/DELETE)

## 📚 We recommend the following libraries

- Tables: [TanStack Table](https://tanstack.com/table/latest/docs/installation)
