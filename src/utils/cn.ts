import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Утилита для объединения классов Tailwind
 * Поддерживает строки, массивы, объекты и условные классы
 * Автоматически разрешает конфликты классов Tailwind (например, p-4 и p-5)
 *
 * @param {...(string|object|array)} inputs - Классы для объединения
 * @returns {string} Объединенная строка классов
 *
 * @example
 * cn('class1 class2', 'class3', { class4: true, class5: false })
 * // 'class1 class2 class3 class4'
 *
 * @example
 * cn('p-4', 'p-5')
 * // 'p-5' (p-4 автоматически заменяется на p-5)
 *
 * @example
 * cn('flex items-center', isActive && 'bg-primary', className)
 * // Объединяет все классы с учетом условий
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
