import Button from "../../../components/button/Button";

const BlogsSec = ({ blogs, onDelete, onAdd, onEdit }) => {
    return (
      <section className="table-container">
        <Button buttonText="Tilføj ny blogindlæg" onClick={onAdd} />
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Teaser</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs?.map((blog) => (
              <tr key={blog._id}>
                <td>{blog.title}</td>
                <td>
                  <img src={blog.image} alt={blog.title} />
                </td>
                <td>{blog.teaser}</td>
                <td>{blog.description}</td>

                <td>
                  <Button
                    buttonText="Rediger"
                    variant="update"
                    onClick={() => onEdit(blog)}
                  />
                  <Button
                    buttonText="Slet"
                    variant="delete"
                    onClick={() => onDelete(blog)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
}

export default BlogsSec;