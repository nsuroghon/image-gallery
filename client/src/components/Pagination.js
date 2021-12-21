import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationNav = ({ imagesPerPage, totalImages }) => {
    const pageNumbers = [];
    
    for(let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <Pagination style={{display: 'flex', justifyContent: 'center', margin: '2%'}}>
            
            <PaginationItem>
                <PaginationLink
                first
                href="!#"
                />
            </PaginationItem>

            <PaginationItem>
                <PaginationLink
                href="!#"
                previous
                />
            </PaginationItem>

            {pageNumbers.map(number => (
                <PaginationItem key={number}>
                    <PaginationLink
                        href="!#">
                    {number}
                    </PaginationLink>
                </PaginationItem>
            ))}

            <PaginationItem>
                <PaginationLink
                href="!#"
                next
            />
            </PaginationItem>

            <PaginationItem>
                <PaginationLink
                href="!#"
                last
                />
            </PaginationItem>

      </Pagination>
    )
}

export default PaginationNav;
