
import React, { useContext, useEffect, useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { CatalogContext } from "../../contexts/catalog.provider";
import { BaseTitle, Container } from "../../pages/styled";

const PdfView = styled.div`
  height: 680px;
  display: flex;
  justify-content: center;
  background: #fff;
  max-width: 750px;
  width: 50vw;

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const MyPdf = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [myPdf, setMyPdf] = useState(null);
  const [name, setName] = useState("");

  const params = useParams();
  const { catalogs } = useContext(CatalogContext);

  useEffect(() => {
    const _id = params.id;
    catalogs?.forEach((catalog) => {
      if (catalog?._id === _id) {
        setMyPdf(catalog?._pdf);
        setName(catalog?._name);
      }
    });
  }, [params.id]);

  return (
    <PdfView>
      {myPdf && (
        <Container>
          <BaseTitle>{name}</BaseTitle>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
            <Viewer fileUrl={myPdf} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </Container>
      )}
    </PdfView>
  );
};

export default MyPdf;
