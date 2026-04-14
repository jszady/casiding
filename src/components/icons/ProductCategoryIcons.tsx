import type { CategoryIcon } from "@/lib/product-categories";

const cls = "h-7 w-7 text-accent";

export function ProductCategoryIcon({ name }: { name: CategoryIcon }) {
  switch (name) {
    case "vinyl":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 8h16v8H4V8z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 12h16M8 8v8M12 8v8M16 8v8" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "aluminum":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 7h14v10H5V7z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M8 7v10M12 7v10M16 7v10" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "fiber":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 6h16v12H4V6z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M8 10h8M8 14h5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "soffit":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 12h18M6 8l-3 4 3 4M18 8l3 4-3 4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9 10h6v4H9v-4z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "trim":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M7 7h10v10H7V7z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 7v10M14 7v10M7 10h10M7 14h10" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "specialty":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3l8 4v10l-8 4-8-4V7l8-4z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M12 12V7M8 9v6M16 9v6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}
