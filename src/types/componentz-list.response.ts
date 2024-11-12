export interface ProductProps {
  title: string;
  price: string;
  description: string;
  imageUrl: string;
  quantity: number;
  onAdd?: () => void;
  onRemove?: () => void;
  onFavorite?: () => void;
  onTrash?: () => void;
}
