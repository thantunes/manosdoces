import React from 'react'
import { useProduct } from 'vtex.product-context'
const ProductSummaryDiscount = () => {
    const { product } = useProduct()
    console.log("Rodando React",product?.items[0], product?.items[0]?.sellers[0]?.commertialOffer?.spotPrice)
    return (
        <>
            {
                product?.items[0]?.sellers[0]?.commertialOffer?.spotPrice !=  product?.items[0]?.sellers[0]?.commertialOffer?.Price ? (<div>
                    <p style={{display:'flex', flexDirection:'row', gap:'15px', marginTop:"0px", marginBottom:'5px', justifyContent:'center'}}>De<b  style={{textDecoration:'line-through', color:'lightgray', fontSize:'14px'}}>{product?.items[0]?.sellers[0]?.commertialOffer?.Price.toLocaleString('pt-br', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</b></p> 
                    <p style={{display:'flex', flexDirection:'row', gap:'15px', marginBottom:"0px", marginTop:'5px', justifyContent:'center', alignItems:'center'}}>para<b style={{color:'#253273', fontSize:'21px'}}>{product?.items[0]?.sellers[0]?.commertialOffer?.spotPrice.toLocaleString('pt-br', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</b></p>
                </div>) : <p style={{margin:'0px'}}><b style={{color:'#253273', fontSize:'21px', margin:'5px 0px'}}>{product?.items[0]?.sellers[0]?.commertialOffer?.Price.toLocaleString('pt-br', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</b></p>
            }
        </>
    )

}

export default ProductSummaryDiscount