import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/theme-provider";
import { ModeToggle } from "./mode-toggle";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <div className="flex items-center justify-center min-h-svh gap-2">
        <div className="flex flex-col items-center justify-center min-h-svh gap-1">
          <Button>Primary</Button>
          <Button disabled>Primary disabled</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="destructive" disabled>
            Destructive disabled
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary" disabled>
            Secondary disabled
          </Button>
          <Button variant="outline">Outline</Button>
          <Button variant="outline" disabled>
            Outline disabled
          </Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="ghost" disabled>
            Ghost disabled
          </Button>
          <Button variant="link">Link</Button>
          <Button variant="link" disabled>
            Link disabled
          </Button>
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="13" r="8" />
              <path d="M12 9v4l2 2" />
              <path d="M5 3 2 6" />
              <path d="m22 6-3-3" />
              <path d="M6.38 18.7 4 21" />
              <path d="M17.64 18.67 20 21" />
            </svg>{" "}
            Icon
          </Button>
          <Button disabled>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="13" r="8" />
              <path d="M12 9v4l2 2" />
              <path d="M5 3 2 6" />
              <path d="m22 6-3-3" />
              <path d="M6.38 18.7 4 21" />
              <path d="M17.64 18.67 20 21" />
            </svg>
            Icon disabled
          </Button>
          <Button size="sm">Primary small</Button>
          <Button size="lg">Primary large</Button>
          <Button size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="13" r="8" />
              <path d="M12 9v4l2 2" />
              <path d="M5 3 2 6" />
              <path d="m22 6-3-3" />
              <path d="M6.38 18.7 4 21" />
              <path d="M17.64 18.67 20 21" />
            </svg>
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center min-h-svh gap-1">
          <button className="access-button">Native primary</button>
          <button className="access-button" disabled>
            Native primary disabled
          </button>
          <button className="access-button access-button-destructive">
            Native destructive
          </button>
          <button className="access-button access-button-destructive" disabled>
            Native destructive disabled
          </button>
          <button className="access-button access-button-secondary">
            Native secondary
          </button>
          <button className="access-button access-button-secondary" disabled>
            Native secondary disabled
          </button>
          <button className="access-button access-button-outline">
            Native outline
          </button>
          <button className="access-button access-button-outline" disabled>
            Native outline disabled
          </button>
          <button className="access-button access-button-ghost">
            Native ghost
          </button>
          <button className="access-button access-button-ghost" disabled>
            Native ghost disabled
          </button>
          <button className="access-button access-button-link">
            Native link
          </button>
          <button className="access-button access-button-link" disabled>
            Native link disabled
          </button>
          <button className="access-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="13" r="8" />
              <path d="M12 9v4l2 2" />
              <path d="M5 3 2 6" />
              <path d="m22 6-3-3" />
              <path d="M6.38 18.7 4 21" />
              <path d="M17.64 18.67 20 21" />
            </svg>
            Icon
          </button>
          <button className="access-button" disabled>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="13" r="8" />
              <path d="M12 9v4l2 2" />
              <path d="M5 3 2 6" />
              <path d="m22 6-3-3" />
              <path d="M6.38 18.7 4 21" />
              <path d="M17.64 18.67 20 21" />
            </svg>
            Icon
          </button>
          <button className="access-button access-button-sm">
            Primary small
          </button>
          <button className="access-button access-button-lg">
            Primary large
          </button>
          <button className="access-button access-button-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="13" r="8" />
              <path d="M12 9v4l2 2" />
              <path d="M5 3 2 6" />
              <path d="m22 6-3-3" />
              <path d="M6.38 18.7 4 21" />
              <path d="M17.64 18.67 20 21" />
            </svg>
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
