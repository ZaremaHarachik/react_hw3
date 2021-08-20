export default function Post({id,title,body}) {


    return (
        <div>
            <p>
                <b>Id: {id}</b>
                -Title: {title}<br/>
                <b>Body:</b> {body}
            </p>
        </div>
    );
}