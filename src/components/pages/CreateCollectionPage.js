import React, { useState } from "react";
import axios from "axios";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, contractABI } from "../../services/config";
import MetaMaskService from "../../services/MetaMaskService";
import Collection from "../../services/Collection.json";

import { toast } from "react-toastify";
import {
  Box,
  CardContent,
  Container,
  Grid,
  Icon,
  MenuItem,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import {
  CardUploadCCollectionStyle,
  LabelUploadCCollectionStyle,
  LabelUploadAfterCollectionStyle,
  InputUploadCCollectionStyle,
  BoxCCollectionStyle,
  TypographyUploadCCollectionStyle,
  ButtonUploadCCollectionUploaderStyle,
  StackUploadCCollectionStyle,
  CircularProgressUploadCCollectionUploaderStyle,
  CircularProgressCreateCollectionStyle,
  ButtonUploadDisCCollectionUploaderStyle,
  CardMediaUploadCCollectionStyle,
  DividerCCollectionStyle,
  TextFieldCollectionNameStyle,
  PaperCCollectionStyle,
  AlertCCollectionStyle,
  GridItemButtonCCollectionStyle,
  ButtonCCollectionStyle,
  SelectCCollectionStyle,
} from "../styles/CreateCollectionNftStyle";

const CreateCollectionPage = () => {
  const { isConnected } = MetaMaskService();

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadImageToPinata = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            pinata_api_key: process.env.REACT_APP_PINATA_KEY,
            pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET,
          },
        }
      );

      if (response.data.IpfsHash) {
        setImageUrl(
          `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`
        );
        toast.success(
          "Your image has been successfully uploaded to Pinata 👍",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      } else {
        toast.error("Failed to upload image to Pinata:" + response.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        // console.error("Failed to upload image to Pinata:", response.data);
      }
    } catch (error) {
      toast.error("Error uploading image to Pinata:" + error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // console.error("Error uploading image to Pinata:", error);
    } finally {
      setLoading(false);
    }
  };

  const createCollection = async () => {
    if (!name || !imageUrl || !category) return false;

    try {
      setLoading(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        contractABI,
        signer
      );

      const tx = await contract.createCollection(name, imageUrl, category);

      await tx.wait();
      toast.success("Your collection has been created successfully 👍", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      const updatedCollectionJson = JSON.stringify({
        abi: Collection.abi,
        contractAddress: CONTRACT_ADDRESS,
        imageUrl: imageUrl,
      });
      console.log("Updated Collection.json:", updatedCollectionJson);

      setTimeout(function () {
        window.location.reload();
      }, 5000);
    } catch (error) {
      toast.error("Error creating collection: " + error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const categories = [
    "Modern",
    "Impressionism",
    "Surrealism",
    "Photography",
    "Digital Art",
    "Calligraphy",
  ];

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        align="center"
        sx={{
          pt: 4,
          pb: 2,
        }}
      >
        Create Collection
      </Typography>
      {!isConnected && (
        <AlertCCollectionStyle variant="filled" severity="warning">
          <Typography variant="subtitle1">
            Please connect to your metamask wallet first to create a collection
          </Typography>
          <AccountBalanceWalletIcon />
        </AlertCCollectionStyle>
      )}

      <CardUploadCCollectionStyle sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Pleas Upload Your Collection Image
            </Typography>
          </CardContent>
        </Box>
        <StackUploadCCollectionStyle spacing={5}>
          {imageUrl ? (
            <>
              <LabelUploadAfterCollectionStyle htmlFor="Asset">
                <CardMediaUploadCCollectionStyle
                  component="img"
                  image={`${imageUrl}`}
                  alt="IMG"
                />
              </LabelUploadAfterCollectionStyle>
            </>
          ) : (
            <>
              <LabelUploadCCollectionStyle htmlFor="Asset">
                {loading ? (
                  <>
                    <InputUploadCCollectionStyle
                      type="file"
                      name="Asset"
                      id="Asset"
                      accept="image/x-png,image/gif,image/jpeg"
                      required
                      onChange={handleFileChange}
                    />
                  </>
                ) : (
                  <>
                    {isConnected ? (
                      <>
                        <InputUploadCCollectionStyle
                          type="file"
                          name="Asset"
                          id="Asset"
                          accept="image/x-png,image/gif,image/jpeg"
                          required
                          onChange={handleFileChange}
                        />
                      </>
                    ) : (
                      <>
                        <InputUploadCCollectionStyle
                          type="file"
                          name="Asset"
                          id="Asset"
                          required
                          disabled
                          accept="image/x-png,image/gif,image/jpeg"
                        />
                      </>
                    )}
                  </>
                )}

                <TypographyUploadCCollectionStyle
                  variant="body2"
                  align="center"
                  gutterBottom
                >
                  Select Your Collection Image
                </TypographyUploadCCollectionStyle>
                <BoxCCollectionStyle>
                  {loading ? (
                    <>
                      <Icon aria-label="upload">
                        <CircularProgressUploadCCollectionUploaderStyle />
                      </Icon>
                    </>
                  ) : (
                    <>
                      <Icon aria-label="upload">
                        <AddCircleOutlineIcon />
                      </Icon>
                    </>
                  )}
                </BoxCCollectionStyle>
              </LabelUploadCCollectionStyle>
            </>
          )}

          {loading ? (
            <ButtonUploadDisCCollectionUploaderStyle
              variant="text"
              onClick={uploadImageToPinata}
              disabled={!file || loading}
              size="small"
            >
              <CircularProgressUploadCCollectionUploaderStyle />
              Upload Image
            </ButtonUploadDisCCollectionUploaderStyle>
          ) : (
            <>
              {!file ? (
                <>
                  <ButtonUploadDisCCollectionUploaderStyle
                    variant="text"
                    disabled
                    size="small"
                  >
                    Upload Image First 👆
                  </ButtonUploadDisCCollectionUploaderStyle>
                </>
              ) : (
                <>
                  {imageUrl ? (
                    <>
                      <ButtonUploadDisCCollectionUploaderStyle
                        variant="text"
                        disabled
                        size="small"
                      >
                        Your image has been uploaded
                      </ButtonUploadDisCCollectionUploaderStyle>
                    </>
                  ) : (
                    <>
                      <ButtonUploadCCollectionUploaderStyle
                        variant="text"
                        onClick={uploadImageToPinata}
                        disabled={!file || loading}
                        size="small"
                      >
                        Upload Image Now
                      </ButtonUploadCCollectionUploaderStyle>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </StackUploadCCollectionStyle>
      </CardUploadCCollectionStyle>
      <DividerCCollectionStyle component="div" role="presentation">
        <Typography>
          Choose The Name Of Your Collection Name & Select Category
        </Typography>
      </DividerCCollectionStyle>
      <Box>
        <Paper elevation={10}>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={1}
          >
            <PaperCCollectionStyle elevation={0}>
              {isConnected ? (
                <>
                  <TextFieldCollectionNameStyle
                    name="_name"
                    id="_name"
                    label="Collection Name"
                    variant="outlined"
                    size="small"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <TextFieldCollectionNameStyle
                    name="_name"
                    id="_name"
                    label="Collection Name"
                    variant="outlined"
                    size="small"
                    required
                    onChange={(e) => setName(e.target.value)}
                    disabled
                  />
                </>
              )}
            </PaperCCollectionStyle>
            <PaperCCollectionStyle elevation={0}>
              {isConnected ? (
                <>
                  <SelectCCollectionStyle
                    displayEmpty
                    size="small"
                    value={category || ""}
                    onChange={(e) => setCategory(e.target.value)}
                    input={<OutlinedInput />}
                    MenuProps={MenuProps}
                    required
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <em>Please Select A Category</em>
                    </MenuItem>
                    {categories.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </SelectCCollectionStyle>
                </>
              ) : (
                <>
                  <SelectCCollectionStyle
                    disabled
                    displayEmpty
                    size="small"
                    value={category || ""}
                    onChange={(e) => setCategory(e.target.value)}
                    input={<OutlinedInput />}
                    MenuProps={MenuProps}
                    required
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <em>Please Select A Category</em>
                    </MenuItem>
                  </SelectCCollectionStyle>
                </>
              )}
            </PaperCCollectionStyle>
          </Stack>
          <Grid container>
            <GridItemButtonCCollectionStyle item xs={12}>
              {loading ? (
                <>
                  <ButtonCCollectionStyle disabled>
                    Creating Collection{" "}
                    <CircularProgressCreateCollectionStyle />
                  </ButtonCCollectionStyle>
                </>
              ) : (
                <>
                  {isConnected ? (
                    <>
                      <ButtonCCollectionStyle
                        onClick={createCollection}
                        disabled={!name || !imageUrl || !category || loading}
                      >
                        {loading ? (
                          <>
                            Creating Collection...
                            <CircularProgressCreateCollectionStyle />
                          </>
                        ) : (
                          <>Create Collection</>
                        )}
                      </ButtonCCollectionStyle>
                    </>
                  ) : (
                    <>
                      <ButtonCCollectionStyle
                        onClick={createCollection}
                        disabled
                      >
                        Create Collection
                      </ButtonCCollectionStyle>
                    </>
                  )}
                </>
              )}
            </GridItemButtonCCollectionStyle>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default CreateCollectionPage;
