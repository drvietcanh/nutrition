/**
 * LocalStorage Utilities
 * 
 * Functions to manage localStorage for tracking user history
 * without requiring login
 */

export interface ToolHistory {
  toolId: string;
  toolName: string;
  timestamp: number;
  data: Record<string, any>;
  result?: Record<string, any>;
}

export interface FavoriteItem {
  type: "article" | "tool";
  id: string;
  title: string;
  url: string;
  timestamp: number;
}

const STORAGE_KEYS = {
  TOOL_HISTORY: "nutrition_tool_history",
  FAVORITES: "nutrition_favorites",
  RECENT_TOOLS: "nutrition_recent_tools",
} as const;

const MAX_HISTORY_ITEMS = 50;
const MAX_RECENT_TOOLS = 10;

/**
 * Get all tool history
 */
export function getToolHistory(): ToolHistory[] {
  if (typeof window === "undefined") return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.TOOL_HISTORY);
    if (!stored) return [];
    const history = JSON.parse(stored) as ToolHistory[];
    return history.sort((a, b) => b.timestamp - a.timestamp);
  } catch (error) {
    console.error("Error reading tool history:", error);
    return [];
  }
}

/**
 * Add tool usage to history
 */
export function addToolHistory(history: ToolHistory): void {
  if (typeof window === "undefined") return;

  try {
    const existing = getToolHistory();
    const updated = [history, ...existing].slice(0, MAX_HISTORY_ITEMS);
    localStorage.setItem(STORAGE_KEYS.TOOL_HISTORY, JSON.stringify(updated));
  } catch (error) {
    console.error("Error saving tool history:", error);
  }
}

/**
 * Clear tool history
 */
export function clearToolHistory(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEYS.TOOL_HISTORY);
}

/**
 * Get recent tools
 */
export function getRecentTools(): string[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEYS.RECENT_TOOLS);
    if (!stored) return [];
    return JSON.parse(stored) as string[];
  } catch (error) {
    console.error("Error reading recent tools:", error);
    return [];
  }
}

/**
 * Add tool to recent list
 */
export function addRecentTool(toolId: string): void {
  if (typeof window === "undefined") return;

  try {
    const recent = getRecentTools();
    const updated = [
      toolId,
      ...recent.filter((id) => id !== toolId),
    ].slice(0, MAX_RECENT_TOOLS);
    localStorage.setItem(STORAGE_KEYS.RECENT_TOOLS, JSON.stringify(updated));
  } catch (error) {
    console.error("Error saving recent tool:", error);
  }
}

/**
 * Get favorites
 */
export function getFavorites(): FavoriteItem[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    if (!stored) return [];
    return JSON.parse(stored) as FavoriteItem[];
  } catch (error) {
    console.error("Error reading favorites:", error);
    return [];
  }
}

/**
 * Add favorite
 */
export function addFavorite(item: Omit<FavoriteItem, "timestamp">): void {
  if (typeof window === "undefined") return;

  try {
    const favorites = getFavorites();
    // Remove if already exists
    const filtered = favorites.filter(
      (f) => !(f.type === item.type && f.id === item.id)
    );
    const updated = [
      { ...item, timestamp: Date.now() },
      ...filtered,
    ];
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(updated));
  } catch (error) {
    console.error("Error saving favorite:", error);
  }
}

/**
 * Remove favorite
 */
export function removeFavorite(type: "article" | "tool", id: string): void {
  if (typeof window === "undefined") return;

  try {
    const favorites = getFavorites();
    const updated = favorites.filter(
      (f) => !(f.type === type && f.id === id)
    );
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(updated));
  } catch (error) {
    console.error("Error removing favorite:", error);
  }
}

/**
 * Check if item is favorited
 */
export function isFavorited(type: "article" | "tool", id: string): boolean {
  if (typeof window === "undefined") return false;

  const favorites = getFavorites();
  return favorites.some((f) => f.type === type && f.id === id);
}
