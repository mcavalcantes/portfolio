export function formatDateShort(date: Date) {
  const formatter = new Intl.DateTimeFormat("pt-BR", {
    month: "short",
    year: "numeric",
  });

  return formatter.format(date);
}
