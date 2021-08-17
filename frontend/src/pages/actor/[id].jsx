import Page from "../../components/page/Page";
import { Button, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const actorAPI = "http://localhost:3333/api/actor";

const NewActor = () => {
  const router = useRouter();

  const {
    query: { id },
  } = router;

  const isNewActor = id === "new";

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
  });

  useEffect(() => {
    if (!isNewActor && id) {
      fetch(`${actorAPI}/${id}`)
        .then((response) => response.json())
        .then((data) => setForm(data.data));
    }
  }, [id]);

  const onSubmit = async () => {
    const params = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };

    try {
      if (isNewActor) {
        await fetch(`${actorAPI}`, {
          ...params,
          method: "POST",
        });
        toast.info("Actor Created");
      } else {
        await fetch(`${actorAPI}/${id}`, {
          ...params,
          method: "PUT",
        });
        toast.info("Actor Updated");
      }

      router.push("/actor");
    } catch (error) {
      toast.error("An Unexpected Error Happened");
    }
  };

  const onChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Page title={isNewActor ? "New Actor" : "Update Actor"}>
      <Form>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={form.first_name}
            onChange={onChange}
            name="first_name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={form.last_name}
            onChange={onChange}
            name="last_name"
          />
        </Form.Group>
        <div className="mt-4">
          <Button variant="secondary" onClick={() => router.back()}>
            Cancel
          </Button>
          &ensp;
          <Button onClick={onSubmit}>Save Actor</Button>
        </div>
      </Form>
    </Page>
  );
};

export default NewActor;
