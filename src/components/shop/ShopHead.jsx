import { Link } from "react-router-dom"


const ShopHead = ({title}) => {
  return (
    <>
        <div className="py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center">
                            <Link to='/'>Home &nbsp; </Link>
                            / {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ShopHead
