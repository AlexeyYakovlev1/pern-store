import { useDispatch, useSelector } from "react-redux";
import classes from "./Pages.module.sass";
import cn from "classnames";
import { setPage } from "redux/actions/pagination.actions";

const Pages = () => {
    const { totalCount, limit, page : currentPage } = useSelector((state:any) => state.pagination);
    const pageCount = Math.ceil(totalCount / limit);
    const dispatch = useDispatch();
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    };

    return (
        <div className={classes.pages}>
            <ul className={classes.list}>
                {pages.map((page:number) => {
                    return (
                        <li
                            key={page}
                            className={cn(classes.item, {
                                [classes.itemActive]: currentPage === page
                            })}
                            onClick={() => dispatch(setPage(page))}
                        >
                            {page}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Pages;