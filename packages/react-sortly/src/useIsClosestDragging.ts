import useItems from './useItems';
import useItem from './useItem';
import useDraggingItem from './useDraggingItem';
import { isClosestOf } from './utils';

export default function useIsClosestDragging(index?: number) {
  const items = useItems();
  const draggingItem = useDraggingItem();
  const item = useItem();

  if (!draggingItem) {
    return false;
  }

  const dragIndex = items.indexOf(draggingItem);

  const targetIndex = index === undefined ? item.index : index;

  return isClosestOf(items, dragIndex, targetIndex);
}
