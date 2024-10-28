import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"
import { TagType } from "../../entities/Tag/model/types"

interface TagSelectWidgetProps {
  selectedTag: string
  setSelectedTag: (value: string) => void
  fetchPostsByTag: (value: string) => void
  updateURL: () => void
  tagList: TagType[]
}

const TagSelectWidget = ({
  selectedTag,
  setSelectedTag,
  fetchPostsByTag,
  updateURL,
  tagList,
}: TagSelectWidgetProps) => {
  return (
    <Select
      value={selectedTag}
      onValueChange={(value) => {
        setSelectedTag(value)
        fetchPostsByTag(value)
        updateURL()
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="태그 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">모든 태그</SelectItem>
        {tagList.map((tag) => (
          <SelectItem key={tag.url} value={tag.slug}>
            {tag.slug}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default TagSelectWidget