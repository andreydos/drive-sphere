export interface IProps {
  title?: string;
}

export const AddCarForm = ({title}: IProps) => {
  return (
    <div>
      {title && (<p>{title}</p>)}
      <p>add car form component</p>
    </div>
  )
}
