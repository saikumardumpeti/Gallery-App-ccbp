// Write your code here.
import './index.css'

const ThumbNails = props => {
  const {imageList, changeActiveImage, isActive} = props
  const {thumbnailUrl, id, thumbnailAltText} = imageList

  const blurImage = isActive ? '' : 'blur'

  const onClickThumbNail = () => {
    changeActiveImage(id)
  }
  return (
    <li className="thumb-nail">
      <button
        className={`button ${blurImage}`}
        type="button"
        onClick={onClickThumbNail}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbNails
