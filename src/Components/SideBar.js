import {ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';




const SideBar = () => {
    return(
<ListGroup>
    <Link className="list-group-item list-group-item-action"tag="a" to="/customer" action>
        Customer
    </Link>
    <Link className="list-group-item list-group-item-action"tag="a" to="/room" action>
        Room
    </Link>
    <Link className="list-group-item list-group-item-action"tag="a" to="/booking" action>
        Booking
    </Link>
</ListGroup>
    )
}

export default SideBar;