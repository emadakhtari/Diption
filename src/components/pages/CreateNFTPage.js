import React, { useEffect, useState } from "react";

import { ethers } from "ethers";
import axios from "axios";
import { CONTRACT_ADDRESS, NFT_ABI } from "../../services/config";
import CollectionContract from "../../services/Collection.json";

import MetaMaskService from "../../services/MetaMaskService";

import { toast } from "react-toastify";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import {
  Box,
  CardContent,
  Container,
  Divider,
  Grid,
  Icon,
  MenuItem,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  AlertCCollectionStyle,
  CardUploadCCollectionStyle,
  StackUploadCCollectionStyle,
  LabelUploadAfterCollectionStyle,
  CardMediaUploadCCollectionStyle,
  LabelUploadCCollectionStyle,
  InputUploadCCollectionStyle,
  TypographyUploadCCollectionStyle,
  BoxCCollectionStyle,
  CircularProgressUploadCCollectionUploaderStyle,
  ButtonUploadDisCCollectionUploaderStyle,
  ButtonUploadCCollectionUploaderStyle,
  DividerCCollectionStyle,
  PaperCCollectionStyle,
  TextFieldCollectionNameStyle,
  TextFieldMultilineCollectionNameStyle,
  SelectCCollectionStyle,
  BoxCreateCollectionSelect,
  GridItemButtonCCollectionStyle,
  ButtonCCollectionStyle,
  CircularProgressCreateCollectionStyle,
} from "../styles/CreateCollectionNftStyle";

function CreateNFTPage() {
  const [name, setName] = useState("");
  const [collection, setCollection] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const [collections, setCollections] = useState([]);
  const [collectionContract, setCollectionContract] = useState(null);

  const { isConnected } = MetaMaskService();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  useEffect(() => {
    const loadCollections = async () => {
      try {
        // Connect to the Ethereum network
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // Load the deployed Collection contract
        const collectionAddress =
          CollectionContract
            .networks[0x56f41b840733e5159a95955301d996f49b7fb4e9].address;
        const collection = new ethers.Contract(
          collectionAddress,
          CollectionContract.abi,
          signer
        );
        setCollectionContract(collection);
        // console.log("Updated NFT.json:", collectionContract);
        // Fetch collections created by the user
        const userCollections = await collection.getAllTokens();
        setCollections(userCollections);
      } catch (error) {
        console.error("Error loading collections: ", error);
      }
    };

    loadCollections();
  }, [collectionContract]);

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
        toast.success("Your File has been successfully uploaded to Pinata 👍", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error("Failed to upload image to Pinata: " + response.data, {
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
      toast.error("Error uploading image to Pinata: " + error, {
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

  const createNFT = async () => {
    try {
      setLoading(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const NFT = new ethers.Contract(CONTRACT_ADDRESS, NFT_ABI, signer);
      await NFT.createNFT(name, price, description, collection, file);
      toast.success("NFT created successfully 👍", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
      // alert("NFT created successfully");
    } catch (error) {
      // console.error("Error creating NFT:", error);
      toast.error("Failed to create NFT " + error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // alert("Failed to create NFT");
      setLoading(false);
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
        Create an NFT
      </Typography>
      {!isConnected && (
        <AlertCCollectionStyle variant="filled" severity="warning">
          <Typography variant="subtitle1">
            Please connect to your metamask wallet first to create a NFT
          </Typography>
          <AccountBalanceWalletIcon />
        </AlertCCollectionStyle>
      )}
      <CardUploadCCollectionStyle sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Pleas Upload Your NFT
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
                      accept="image/x-png,image/gif,image/jpeg,audio/mp3"
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
                          accept="image/x-png,image/gif,image/jpeg,audio/mp3"
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
                          disabled
                          accept="image/x-png,image/gif,image/jpeg,audio/mp3"
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
                  Select Your NFT File
                </TypographyUploadCCollectionStyle>
                <TypographyUploadCCollectionStyle
                  variant="caption"
                  align="center"
                  gutterBottom
                >
                  Authorized files:
                </TypographyUploadCCollectionStyle>
                <Divider />
                <TypographyUploadCCollectionStyle
                  variant="caption"
                  align="center"
                  gutterBottom
                >
                  (PNG - GIF - JPEG -mp3)
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
              Upload File
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
                    Upload File First 👆
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
                        Your File has been uploaded
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
                        Upload File Now
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
        <Typography>Please fill all the fields carefully</Typography>
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
                    name="name"
                    id="name"
                    label="NFT Name"
                    variant="outlined"
                    size="small"
                    value={name || ""}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <TextFieldCollectionNameStyle
                    name="name"
                    id="name"
                    label="NFT Name"
                    variant="outlined"
                    size="small"
                    value={name || ""}
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
                  <TextFieldCollectionNameStyle
                    type="number"
                    name="price"
                    id="price"
                    label="Price (ETH)"
                    variant="outlined"
                    size="small"
                    value={price || ""}
                    required
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <TextFieldCollectionNameStyle
                    type="number"
                    name="price"
                    id="price"
                    label="Price (ETH)"
                    variant="outlined"
                    size="small"
                    value={price || ""}
                    required
                    onChange={(e) => setPrice(e.target.value)}
                    disabled
                  />
                </>
              )}
            </PaperCCollectionStyle>
          </Stack>
          <Grid container>
            <Grid item xs={12}>
              <PaperCCollectionStyle elevation={0}>
                {isConnected ? (
                  <>
                    <TextFieldCollectionNameStyle
                      name="description"
                      id="description"
                      label="Description"
                      multiline
                      rows={3}
                      placeholder="Enter The Description"
                      required
                      onChange={(e) => setDescription(e.target.value)}
                    >
                      {description || ""}
                    </TextFieldCollectionNameStyle>
                  </>
                ) : (
                  <>
                    <TextFieldMultilineCollectionNameStyle
                      name="description"
                      id="description"
                      label="Description"
                      multiline
                      rows={3}
                      placeholder="Enter The Description"
                      required
                      onChange={(e) => setDescription(e.target.value)}
                      disabled
                    >
                      {description || ""}
                    </TextFieldMultilineCollectionNameStyle>
                  </>
                )}
              </PaperCCollectionStyle>
            </Grid>
          </Grid>
          <BoxCreateCollectionSelect component="div">
            <PaperCCollectionStyle elevation={0}>
              {isConnected ? (
                <>
                  <SelectCCollectionStyle
                    displayEmpty
                    size="small"
                    value={collection || ""}
                    onChange={(e) => setCollection(e.target.value)}
                    input={<OutlinedInput />}
                    MenuProps={MenuProps}
                    required
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <em>Please Select Your Collection</em>
                    </MenuItem>
                    {collections.map((collection) => (
                      <MenuItem key={collection} value={collection}>
                        {collection}
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
                    value={collection || ""}
                    onChange={(e) => setCollection(e.target.value)}
                    input={<OutlinedInput />}
                    MenuProps={MenuProps}
                    required
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <em>Please Select Your Collection</em>
                    </MenuItem>
                  </SelectCCollectionStyle>
                </>
              )}
            </PaperCCollectionStyle>
          </BoxCreateCollectionSelect>
          <Grid container>
            <GridItemButtonCCollectionStyle item xs={12}>
              {loading ? (
                <>
                  <ButtonCCollectionStyle disabled>
                    Creating NFT
                    <CircularProgressCreateCollectionStyle />
                  </ButtonCCollectionStyle>
                </>
              ) : (
                <>
                  {isConnected ? (
                    <>
                      <ButtonCCollectionStyle
                        onClick={createNFT}
                        disabled={
                          !name ||
                          !imageUrl ||
                          !collection ||
                          !price ||
                          !description ||
                          loading
                        }
                      >
                        {loading ? (
                          <>
                            Creating NFT...
                            <CircularProgressCreateCollectionStyle />
                          </>
                        ) : (
                          <>Create Collection</>
                        )}
                      </ButtonCCollectionStyle>
                    </>
                  ) : (
                    <>
                      <ButtonCCollectionStyle onClick={createNFT} disabled>
                        Create NFT
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
}

export default CreateNFTPage;
