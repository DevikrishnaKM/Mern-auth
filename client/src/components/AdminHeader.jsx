import { Link, useNavigate } from "react-router-dom";
import { adminLogout } from "../redux/admin/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function AdminHeader(){
    const {admin} = useSelector((state)=>state.admin);
    const navigate = useNavigate();
    const dispatch= useDispatch()

    
         return (
            <div className="bg-slate-200">
              <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                <Link to="/">
                  <h1 className="font-bold text-slate-700">User Management App</h1>
                </Link>
                <ul className="flex gap-4">
                  {admin?
                  (<li className="text-slate-600">{admin.name}</li>):''
                  }
                 
                 
                
                </ul>
              </div>
            </div>
          );
    }

