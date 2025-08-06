import Styles from './create.module.css';

const Layout = (props)=>{
  return(
    <>
      <h2 className={Styles.title}>Create Form</h2>
      {props.children}
    </>
  )
}
export default Layout;